var link = $context.link
var data = $context.data
var image = $context.image
var text = $context.text

if (link && link.slice(0, 4) == 'file') {
  if (link.slice(-4) == '.tex') {
    $quicklook.open({text: $context.data['string']})
    return
  } else if (data) {
    $quicklook.open({data: data})
    return
  } else if (image) {
    $quicklook.open({image: image})
    return
  } else if (text) {
    $quicklook.open({text: text})
    return
  }
} else {
  $quicklook.open({url: link})
  return
}