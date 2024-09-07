document.querySelector('.btn-open').onclick = () => {
    basicLightbox
        .create(
            `
		<img src="https://d3544la1u8djza.cloudfront.net/APHI/Blog/2021/07-06/small+white+fluffy+dog+smiling+at+the+camera+in+close-up-min.jpg">
	`
        )
        .show();
};
