// adding a link back to the source of the text after the paragraph tag
const link = document.createElement('a');
link.href = 'https://forceipsum.com/'
link.innerText = 'Text generated from Lorem Ipsum';
document.body.appendChild(link);