let ccinputs = document.getElementsByName("captcha_code");
ccinputs[2].remove();
ccinputs[1].remove();
ccinputs[0].remove();

let ccimages = document.getElementsByName("captcha");
ccimages[2].remove();
ccimages[1].remove();
ccimages[0].remove();

let cctexts = document.querySelectorAll("a[href='#']");
cctexts[2].remove();
cctexts[1].remove();
cctexts[0].remove();
