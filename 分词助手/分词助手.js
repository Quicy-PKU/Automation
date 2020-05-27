// $app.theme = 'light'
// $app.theme = 'dark'
$app.theme = 'auto'
var content = $clipboard.text

$text.tokenize({
    text: content,
    handler: function(results) {
        var selected_index = []
        var selected_text = []
        $ui.render({
            props: {
                title: '分词助手'
            },
            views: [{
                type: 'view',
                props: {
                    id: 'main'
                },
                layout: $layout.fillSafeArea,
                views: [
                    {
                        type: 'label',
                        props: {
                          id: 'selected_text',
                          text: '选中文字以开始',
                          lines: 0,
                          textColor: $color('purple'),
                          align: $align.left,
                        },
                        layout: function(make, view) {
                            make.top.inset(10)
                            make.left.right.inset(20)
                        }
                    },
                    {
                        type: 'button',
                        props: {
                            id: 'button',
                            title: "拷贝至剪贴板"
                        },
                        layout: function(make, view) {
                            make.top.equalTo($('selected_text').bottom).offset(10)
                            make.left.right.inset(120)
                        },
                        events: {
                            tapped (sender) {
                                $clipboard.set({ type: "public.plain-text", value: selected_text.join('') })
                                console.log('写入剪贴板成功:' + $clipboard.text)
                            } 
                        }
                    },
                    {
                        type: 'matrix',
                        props: {
                            id: 'segmentation',
                            spacing: 5,
                            template: [{
                                type: 'label',
                                props: {
                                    id: 'tile',
                                    radius: 5,
                                    font: $font(18),
                                    scrollEnabled: 0,
                                    bgcolor: $rgba(255, 255, 255, 0.28),
                                    textColor: $color("#333"),
                                    borderColor: $rgba(100, 100, 100, 0.25),
                                    borderWidth: 0.4,
                                    align: $align.center
                                },
                                layout: $layout.fill
                            }],
                            data: results.map(text => {
                                return {
                                  "tile": {text}
                                }
                            })
                        },
                        layout: function(make, view) {
                            make.left.right.bottom.inset(0.1)
                            make.top.equalTo($('button').bottom).offset(20)
                        },
                        events: {
                            didSelect: (sender, indexPath) => {
                                var index = undefined
                                for (var i=selected_index.length-1; i>=0; i--) {
                                    if (selected_index[i] ==indexPath.row) {
                                        index = i
                                    }
                                }
                                label = sender.cell(indexPath).get("tile");
                                if (index != undefined) {
                                    selected_index.splice(index, 1)
                                    selected_text.splice(index, 1)
                                    label.textColor = $color("#333");
                                    label.bgcolor = $rgba(255, 255, 255, 0.28);
                                    label.borderColor = $rgba(100, 100, 100, 0.25);
                                    label.borderWidth = 0.5;
                                }
                                else {
                                    selected_index.push(indexPath.row)
                                    selected_text.push(sender.cell(indexPath).get('tile').text)  
                                    label.textColor = $color("white");
                                    label.bgcolor = $color("lightGray");
                                    label.borderColor = $color("gray");
                                    label.borderWidth = 1; 
                                }
                                $('selected_text').text = selected_text.join('')
                            },
                            itemSize: (sender, indexPath) => {
                                var data = sender.object(indexPath)
                                var size = $text.sizeThatFits({
                                    text: data.tile.text,
                                    width: 320,
                                    font: $font(18)
                                });
                                return $size(size.width + 14, 30)
                            }
                        }
                    }
                ]
            }]
        })
    }
})
