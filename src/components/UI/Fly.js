export function fly(item) {
    const productButton = document.querySelector('.item__to-product')
    if (!productButton.classList.contains('_fly')) {
        productButton.classList.add('_fly');

        const cart = document.querySelector('.order-icon');
        const product = document.getElementById(`${item.id}`);
        const productImage = product.querySelector('.item__image');
        const productImageFly = productImage.cloneNode(true);

        const productImageFlyWidth = productImage.offsetWidth;
        const productImageFlyHeight = productImage.offsetHeight;
        const productImageFlyTop = productImage.getBoundingClientRect().top;
        const productImageFlyleft = productImage.getBoundingClientRect().left;

        productImageFly.setAttribute('class', '_flyImage -ibg');
        productImageFly.style.cssText =
            `
			left: ${productImageFlyleft}px;
			top: ${productImageFlyTop}px;
			width: ${productImageFlyWidth}px;
			height: ${productImageFlyHeight}px;
			`;
        document.body.append(productImageFly);

        const cartFlyLeft = cart.getBoundingClientRect().left;
        const cartFlyTop = cart.getBoundingClientRect().top;

        productImageFly.style.cssText =
            `
			left: ${cartFlyLeft}px;
			top: ${cartFlyTop}px;
			width: 0px;
			height: 0px;
			opacity: 0;
			`;
        productImageFly.addEventListener('transitionend', function () {
            if(productButton.classList.contains('_fly')) {
                productImageFly.remove();
                // updateCart(productButton, productId);
                productButton.classList.remove('_fly');
            }
        });
    }
}