---
title: 如何在电脑上运行 macOS？—— 黑苹果指南 Part 1
date: 2025-03-23
updated: 2025-03-23
categories: 技术教程
tags:
  - 黑苹果
  - macOS
  - Hackintosh
  - 开发环境
  - iOS开发
top: 2
---

::: zh-CN
小时候看苹果发布会，总觉得 Mac 电脑又流畅又先进，对比自己笨重的 Windows 设备，心里难免有点羡慕。而且如果想要开发 iOS App，必须要用 Xcode，而 Xcode 只能在 macOS 上运行。可是当你打开苹果官网，看看 Mac 电脑的价格：

> “个，十，百，千……”  
> “太贵了！”

那有没有其他方法呢？ 

![啊有了](../../public/images/meme/ei.gif){ width=300 }

**有！** 这时候就轮到 **黑苹果（Hackintosh）** 闪亮登场了。

---

### 什么是黑苹果？

**黑苹果（Hackintosh）**，简单来说就是让 macOS 运行在非苹果硬件上。通过修改 EFI 引导、配置内核补丁等方式，可以让 PC 电脑成功运行 macOS，并且在某些情况下，黑苹果的性能甚至可以超过某些官方 Mac 设备。

你可能会问：

> “为什么不用 VMware、VirtualBox 或 QEMU 直接虚拟 macOS？”

答案是：虚拟机无法提供完整的 macOS 体验，特别是**没有 3D 硬件加速**，导致 Xcode 编译速度慢、动画掉帧，甚至某些应用无法运行。所以，如果想要稳定使用 macOS，**只能选择物理机安装**。

---

### 黑苹果 vs. Linux

有人可能会想：

> “那为什么不直接用 Linux 呢？Linux 不是比 macOS 更开放、更自由吗？”

的确，Linux 很香，特别是对于开发者来说，Linux 生态强大，命令行体验优秀。但是 macOS 依然有一些独特的优势：

1. **Xcode 只能在 macOS 上运行**（开发 iOS / macOS 必备）。
2. **Final Cut Pro、Logic Pro 等专业软件** 只有 macOS 版本。
3. **macOS 原生支持 Adobe 系列软件**（虽然 Linux 也能用替代品，但体验还是不一样）。
4. **macOS 更适合 UI 设计师**（Sketch、Figma 等工具在 macOS 上体验更好）。

所以，如果你是开发者、设计师或者剪辑师，macOS 可能是绕不开的选择。

---

### 黑苹果的安装流程概述

黑苹果的安装不是一键搞定的，需要一定的技术门槛。大致流程如下：

1. **检查硬件兼容性**  
   - Intel CPU（10 代及以下兼容性较好）
   - AMD Ryzen 需要特殊补丁（不建议新手尝试）
   - 兼容的主板（推荐使用 Intel 芯片组，如 B460、Z490）
   - AMD / Nvidia 独显在 macOS 支持有限，**推荐使用核显（如 Intel UHD 630）** 或 **RX 580 / 6600 XT**
   - 于详细的GPU兼容性，请查看 [Dortania GPU 购买指南](https://dortania.github.io/GPU-Buyers-Guide/)

2. **制作 macOS 启动盘**  
   - 需要一个 16GB 以上的 U 盘
   - 使用 macOS / Windows 制作 OpenCore / Clover 引导

3. **引导并安装 macOS**  
   - 进入 OpenCore / Clover 选择安装 macOS
   - 格式化磁盘，安装 macOS

4. **驱动修复**  
   - 修复显卡驱动、声卡、网卡等
   - 调整 USB 映射，优化电源管理

5. **优化体验**  
   - 安装 Xcode、Adobe 软件等
   - 配置 iCloud、Handoff 等功能

---

### 黑苹果的优缺点

| 优点 | 缺点 |
|------|------|
| 省钱，不用买昂贵的 Mac | 安装过程复杂，需要折腾 |
| 硬件可选，性能可以更强 | 不是所有硬件都兼容 |
| 可运行 macOS 专属软件 | macOS 更新可能会导致系统损坏 |

---

### 结语

黑苹果是一个有趣且实用的方案，特别是对于想开发 iOS App 但买不起 Mac 的开发者来说，是一个不错的选择。当然，安装黑苹果并不简单，需要不断调整和优化，但当你看到 macOS 在自己的 PC 上流畅运行时，那种成就感是无与伦比的！

如果你对黑苹果感兴趣，不妨试试看！
:::

::: en
As a child watching Apple keynotes, I always thought Mac computers were smooth and advanced. Comparing them to my clunky Windows device, I couldn't help feeling envious. Plus, if you want to develop iOS apps, you need Xcode, which only runs on macOS. But when you open Apple's website and look at Mac prices:

> "Hundreds, thousands..."
> "Too expensive!"

Is there another way?

![Aha, got it!](../../public/images/meme/ei.gif){ width=300 }

**Yes!**

This is where **Hackintosh** comes into play.

---

### What is a Hackintosh?

A **Hackintosh** is simply running macOS on non-Apple hardware. By modifying the EFI boot system and configuring kernel patches, you can get a PC to successfully run macOS. In some cases, a Hackintosh can even outperform certain official Mac devices.

You might ask:

> "Why not just use VMware, VirtualBox, or QEMU to virtualize macOS?"

The answer is: virtual machines can't provide a complete macOS experience, especially without **3D hardware acceleration**, leading to slow Xcode compilation, dropped animation frames, and some applications not running at all. So, if you want stable macOS usage, **physical installation is the only option**.

---

### Hackintosh vs. Linux

Some might wonder:

> "Why not just use Linux? Isn't Linux more open and free than macOS?"

Indeed, Linux is great, especially for developers with its powerful ecosystem and excellent command-line experience. But macOS still has some unique advantages:

1. **Xcode only runs on macOS** (essential for iOS/macOS development).
2. **Professional software like Final Cut Pro and Logic Pro** only have macOS versions.
3. **macOS natively supports Adobe software** (while Linux can use alternatives, the experience is different).
4. **macOS is better suited for UI designers** (tools like Sketch and Figma have better experiences on macOS).

So, if you're a developer, designer, or video editor, macOS might be unavoidable.

---

### Hackintosh Installation Process Overview

Installing a Hackintosh isn't a one-click solution; it requires some technical knowledge. The general process is:

1. **Check hardware compatibility**
   - Intel CPUs (10th generation and below have better compatibility)
   - AMD Ryzen requires special patches (not recommended for beginners)
   - Compatible motherboards (Intel chipsets recommended, like B460, Z490)
   - AMD/Nvidia GPUs have limited support in macOS, **integrated graphics (like Intel UHD 630)** or **RX 580/6600 XT** are recommended
   - For detailed GPU compatibility, check the [Dortania GPU Buyers Guide](https://dortania.github.io/GPU-Buyers-Guide/)

2. **Create a macOS boot drive**
   - Requires a 16GB+ USB drive
   - Use macOS/Windows to create OpenCore/Clover boot

3. **Boot and install macOS**
   - Enter OpenCore/Clover to select macOS installation
   - Format disk, install macOS

4. **Fix drivers**
   - Fix graphics, audio, network card drivers
   - Adjust USB mapping, optimize power management

5. **Optimize experience**
   - Install Xcode, Adobe software, etc.
   - Configure iCloud, Handoff, and other features

---

### Pros and Cons of Hackintosh

| Pros | Cons |
|------|------|
| Save money, no need to buy expensive Macs | Complex installation process, requires tinkering |
| Hardware choices, can have stronger performance | Not all hardware is compatible |
| Can run macOS-exclusive software | macOS updates may damage the system |

---

### Conclusion

Hackintosh is an interesting and practical solution, especially for developers who want to develop iOS apps but can't afford a Mac. Of course, installing a Hackintosh isn't simple and requires constant adjustment and optimization, but when you see macOS running smoothly on your PC, that sense of achievement is incomparable!

If you're interested in Hackintosh, why not give it a try!
:::