# iPhone、iPad 和 Mac 上的自动化

「自动化」和「生产力」是一个经常提到的话题。最近几年 iPhone 上的「workflow」被苹果收购，之后更名为「捷径」，后来更名为「快捷指令」，并在 iOS 13 中加入了「自动化」功能。最近几年我们在 iPad Pro 的介绍上也总是看到「生产力」。「自动化」是提升生产力的一个很关键因素，「自动化」能够帮助我们自动处理重复的事情，从而节省我们的时间，也能让我们不因为繁琐的事情扰乱自己的工作，让我们的设备变得更加好用。

在我们的生活、学习和工作中，经常需要做一些繁琐机械的操作，例如

- 看到不认识的单词时，我们需要复制这个单词，然后打开词典，粘贴单词查看这个单词的翻译或发音
- 在某个应用程序未响应，我们需要打开「强制退出」，然后选择这个应用程序强制退出后，再重新打开这个应用程序
- 打开一个网页，却提示与当前浏览器不兼容，我们需要复制当前网页的 URL，然后关闭页面，换另一个浏览器打开
- 在 Markdown 中添加一个网页超链接时，我们需要输入网页标题，复制网页 URL，再用 Markdown 的格式进行输入
- 整理桌面和下载的文件，我们需要逐个将文件存放合适的位置
- 出门玩耍准备回家时，我们需要打开导航软件，然后搜索家的位置，并查看路线
- 朋友在微信上发来大段的文本，我们需要打开手机的备忘录或其他文本编辑器，然后粘贴这段文本，并从中选出我们需要复制的文本

还有很多很多的场景，这些都是繁琐机械的操作。尽管其中有些事情，我们真正在做的时候花不了多少时间，在十几秒到半分钟之间就能完成，但如果这些操作能够通过「自动化软件」来完成，那我们的设备就能变得更加好用。对于刚刚提到的繁琐机械的操作，我的处理方式是这样的

- 选中单词，按下快捷键 `⇪Caps lock + T`
- 按下快捷键 `⇪Caps lock + Q`
- 按下快捷键 `⇪Caps lock + G`
- 输入短语 `mccur`
- Hazel 自定义规则，后台自动整理文件
- 打开主界面的「回家」，自动跳转至高德地图中，并直接显示路线搜索结果
- 打开主界面的「分词」，自动跳转至 JSBox，并自动将剪贴板内容分词，选择文本后即可复制至剪切板

我用的快捷键都相对简单，统一都是「修饰键」+「字母」。这里的 `⇪Caps lock` 的功能是 `⌃Control + ⌥Option + ⌘Command + ⇧Shift`，这样能够保证绝大多数软件自带的快捷键不会与我们设置的快捷键冲突。这里的字母则是相应功能的英文首字母，`T` 表示 Translate、`Q` 表示 Quit、`G` 表示 Google Chrome。

通过「Karabiner-Elements」可以设置按键映射，我定义了两条功能

- `⇪Caps lock` 映射至 `⌃Control + ⌥Option + ⌘Command + ⇧Shift`，这样我就可以通过 `⇪Caps lock + 字母/数字` 来设置快捷键而不与其他软件冲突
- 右 `⌘Command` 映射至 `⇪Caps lock`，这样就能通过右侧 `⌘Command` 来使用原来 `⇪Caps lock` 的切换输入法的功能

![Karabiner-Elements](https://raw.githubusercontent.com/Quicy-PKU/Image-Hosting/master/Automation/Karabiner-Elements.png)



我们在使用自动化之前，需要安装自动化软件，我用的自动化软件如下

- iPhone、iPad: [快捷指令](https://apps.apple.com/cn/app/%E5%BF%AB%E6%8D%B7%E6%8C%87%E4%BB%A4/id915249334)、[JSBox](https://jsboxbbs.com/)
![iOS SoftWare](https://raw.githubusercontent.com/Quicy-PKU/Image-Hosting/master/Automation/iOS-Software.png)

- Mac: [Alfred](https://www.alfredapp.com/)、[Keyboard Maestro](https://www.keyboardmaestro.com/main/)、[Hazel](https://www.noodlesoft.com/)、[BetterTouchTool](https://folivora.ai/)
![Mac SoftWare](https://raw.githubusercontent.com/Quicy-PKU/Image-Hosting/master/Automation/Mac-Software.png)

# **推荐网站**

## **自动化脚本库**

- [Shortcuts Gallery - 少数派](https://shortcuts.sspai.com/)
- [JSBox-Demo](https://xteko.com/demos)
- [Alfred theme and workflow](https://www.packal.org/)
- [Keyboard Maestro Blog](https://www.stairways.com/blog/)

## **学习资源**

- [Alfred Workflow 从使用到创造 - 少数派](https://sspai.com/post/57648)
- [一站式文件处理中心：Alfred 文件搜索 & 处理详解 - 少数派](https://sspai.com/post/56175)
- [macOS 效率启动器双雄：Alfred vs. LaunchBar - 少数派](https://sspai.com/post/55614)
- [Toolbox Pro 使用详解 - 少数派](https://sspai.com/post/57529)
- [快捷指令自动化使用详解 - 少数派](https://sspai.com/post/57045)
- [Hazel 使用详解 - 少数派](https://sspai.com/post/43317)
- [BetterTouchTool 使用详解 - 少数派](https://sspai.com/post/43369)
- [Keyboard Maestro Wiki](https://wiki.keyboardmaestro.com/Home_Page)

# 我的自动化操作

最后，我罗列一下我汇总以及我制作的自动化操作。在这个[表格](https://www.notion.so/quicy/c770e53768b64ecaafc8652fb89725c4)中，我汇总了自动化操作，每一列的含义如下

- `Name`: 自动化操作的名称，点击后可以展开显示更详细的内容，包括原理解析、使用方式、参考链接等
- `Status`: 表示整理的状态，分别是 Not Started(未开始)、In Progress(正在做)、Completed(已完成)
- `Software`: 表示实现这个自动化操作需要使用到的软件
- `Description`: 对这个自动化操作的一个简要说明
- `GitHub URL`: 自动化脚本所在的 GitHub URL