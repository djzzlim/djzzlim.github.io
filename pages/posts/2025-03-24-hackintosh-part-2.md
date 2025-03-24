---
title: 如何在电脑上运行 macOS？—— 黑苹果指南 Part 2
date: 2025-03-24
updated: 2025-03-24
categories: 技术教程
tags:
  - 黑苹果
  - macOS
  - Hackintosh
  - 开发环境
top: 3
---

## 前言

在经历了一系列尝试与调整后，我终于成功地在我的HP EliteDesk 800 G2 Mini上安装了macOS系统。这篇文章主要记录我的安装过程、遇到的问题以及解决方案，希望能对有类似硬件配置的朋友提供一些参考。

## 硬件配置

我的电脑是HP EliteDesk 800 G2 Mini，具体配置如下：

| 硬件 | 型号 |
|------|------|
| CPU  | Intel Core i5-6600T (Skylake) |
| 主板 | HP EliteDesk 800 G2 Mini 内置主板 |
| 显卡 | Intel HD Graphics 530 (集成显卡) |
| 内存 | 12GB DDR4 |
| 硬盘 | 500GB HDD |
| 网卡 | 无网卡 |

## 安装准备

### 必备工具

- 16GB以上U盘（用于制作安装介质）
- 稳定的互联网连接
- 备份重要数据（安装过程可能会涉及分区操作）

### BIOS设置

我首先将BIOS更新到最新版本(2023年版)，这是非常推荐的步骤，因为它提供了更好的兼容性和稳定性。

以下是我在HP EliteDesk 800 G2 Mini上的详细BIOS设置：

**安全相关设置：**
- **TPM Embedded Security** - 设置为hidden
- **Intel Software Guard Extension (SGX)** - Disabled
- **Secure boot configuration** - 设置为Legacy Support Enable和Secure Boot Disable

**启动选项：**
- **USB Storage boot** - Enabled（确保可以从U盘启动）
- **PXE boot** - Disabled
- **Fast boot** - Disabled
- **CD-ROM boot** - Disabled
- 启动顺序根据个人需求设置

**系统选项：**
- **Turbo-boost** - Enabled
- **Multi-processor** - Enabled
- **VT (VTx)** - Enabled
- **M.2 SSD** - Enabled
- **Allow PCIe/PCI SERR# Interrupt** - Enabled
- 虚拟化选项保持启用，这些设置安全且稳定

**内置设备选项：**
- **Embedded LAN controller** - Enabled
- **Audio device** - Enabled
- **Internal speakers** - Enabled
- **Video memory size** - 增加到512MB（这对于黑苹果非常重要）

**端口选项：**
- 所有端口选项全部启用

**可选ROM策略：**
- 全部设置为Legacy

**电源管理选项：**
- 除了"unique sleep state blink rates"外，其他全部启用

**远程管理选项：**
- 所有选项均禁用

> 注：如果找不到某些选项，可能是因为不同主板的BIOS界面差异。更详细的BIOS设置可以参考[tonymacx86.com](https://tonymacx86.com)上针对特定主板的指南。

## OpenCore引导准备

首先，我们需要下载OpenCore引导包。可以从官方GitHub仓库获取最新版本：[https://github.com/acidanthera/OpenCorePkg/releases](https://github.com/acidanthera/OpenCorePkg/releases)

下载后，我们会发现OpenCore包含以下几个主要部分：

### OpenCore包结构

- **Docs**：存放OC最新的配置文档、版本更新变化、ACPI示例文件以及Sample.list配置文件模板
- **IA32**：里面放着32位老机器使用的EFI引导文件
- **Utilities**：OC官方集成的小工具都放在这里
- **X64**：里面放着64位目前主流机器使用的EFI引导文件

OpenCore提供了2个配置文件模板，分别是Sample.plist和SampleCustom.plist，通常我们使用Sample.plist这个配置文件。

### EFI文件夹结构

EFI部分是OpenCore的重头戏，下面是EFI主要文件夹的作用：

##### BOOT文件夹
BOOT引导文件夹，包含BOOTx64.efi引导文件。

##### OC/ACPI文件夹
存放SSDT编译好的文件，格式均为.aml格式。这些文件用于修复和完善ACPI表，确保硬件能够正常工作。

##### OC/Drivers文件夹
这里放着一些驱动文件，这些驱动均以.efi后缀结尾，OC官方默认提供了多个驱动文件。

##### OC/Kexts文件夹
这里放着Kexts内核扩展文件，格式均为.kext文件。这些文件是黑苹果能够正常工作的关键，用于驱动各种硬件设备。

##### Resources文件夹
这里放着OC的第三方主题文件，我个人一直使用官方主题，简约美观。

##### Tools文件夹
OC小工具文件夹，包含了一些实用工具如CleanNvram.efi和ResetSystem.efi等。

## 配置OpenCore（针对HP EliteDesk 800 G2 Mini）

对于我的HP EliteDesk 800 G2 Mini与Intel Core i5-6600T处理器，我需要以下关键Kext：

1. **基础/核心Kext**
   - [**Lilu.kext**](https://github.com/acidanthera/lilu/releases) - 核心补丁引擎，许多其他Kext的前置依赖
   - [**VirtualSMC.kext**](https://github.com/acidanthera/virtualsmc/releases) - 模拟Apple SMC芯片，黑苹果必备组件

2. **显卡相关**
   - [**WhateverGreen.kext**](https://github.com/acidanthera/whatevergreen/releases) - 用于Intel HD Graphics 530显卡驱动和修复

3. **声卡与网络**
   - [**AppleALC.kext**](https://github.com/acidanthera/applealc/releases) - 用于声卡驱动和布局识别
   - [**IntelMausi.kext**](https://github.com/acidanthera/intelmausi/releases) - 用于Intel以太网控制器驱动

4. **USB与电源管理**
   - [**USBInjectAll.kext**](https://github.com/Sniki/OS-X-USB-Inject-All/releases) - 用于USB端口注入
   - [**CPUTscSync.kext**](https://github.com/acidanthera/CpuTscSync/releases) - 用于多核CPU时钟同步
   - [**HibernationFixup.kext**](https://github.com/acidanthera/HibernationFixup/releases) - 修复休眠问题

5. **其他功能Kext**
   - [**NVMeFix.kext**](https://github.com/acidanthera/NVMeFix/releases) - 用于改进NVMe驱动支持
   - [**RTCMemoryFixup.kext**](https://github.com/acidanthera/RTCMemoryFixup/releases) - 修复RTC内存问题
   - [**SMCProcessor.kext**](https://github.com/acidanthera/virtualsmc/releases) - VirtualSMC插件，提供CPU温度监控
   - [**SMCSuperIO.kext**](https://github.com/acidanthera/virtualsmc/releases) - VirtualSMC插件，提供风扇监控

### ACPI文件配置

对于Skylake平台，我需要以下SSDT文件：

1. [**SSDT-PLUG-DRTNIA.aml**](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-PLUG-DRTNIA.aml) - 用于CPU电源管理
2. [**SSDT-EC-USBX-DESKTOP.aml**](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-EC-USBX-DESKTOP.aml) - 修复嵌入式控制器

## OpenCore配置工具

如果您使用Windows/Mac系统准备EFI分区，推荐使用：

- [**OCAuxiliaryTools (OCATs)**](https://github.com/ic005k/OCAuxiliaryTools/releases)
  - 替代ProperTree的更现代化选择
  - 提供图形化界面编辑config.plist

> Kexts（内核扩展）是有加载顺序要求的，并且有些 Kexts 之间可能会发生冲突，导致系统无法启动。

## 尾声  

到目前为止，我们已经完成了HP EliteDesk 800 G2 Mini的基础设置，包括BIOS调整、OpenCore引导准备以及必备的Kexts和ACPI文件。这样，我们的黑苹果系统已经基本具备了启动的条件。  

然而，OpenCore的**config.plist**配置才是决定黑苹果能否正常引导的关键。错误的config.plist可能会导致卡在苹果logo、无法识别硬件，甚至直接黑屏。  

在**下一篇文章**，我将详细讲解如何正确配置**config.plist**，让你的Hackintosh更加稳定，避免常见问题。敬请期待！