
document.addEventListener("DOMContentLoaded", function(event) {

//Modal opener
(() => {
   [].slice.call(document.getElementsByClassName('modal-opener')).map( item => {
       item.onclick = () => {
           const targetName = item.dataset['modalOpen'];
           if ( !targetName ) return;
           const target = document.querySelector( targetName );
           if ( !target ) return;
           target.classList.add('modal-show');
       };
   });
   [].slice.call(document.getElementsByClassName('modal-closer')).map( item => {
       item.onclick = () => {
           const targetName = item.dataset['modalClose'];
           if ( !targetName ) return;
           const target = document.querySelector( targetName );
           if ( !target ) return;
           target.classList.remove('modal-show');
       };
   });

})();


//Slider
(() => {

    [].slice.call(document.getElementsByClassName('slider-control')).map(item => {
        item.onclick = () => {
            const targetName = item.dataset['target'];
            const navigation = item.dataset['navigation'];
            if (!targetName || !navigation) return;
            const target = document.querySelector( targetName );
            if ( !target ) return;
            moveSlider(target, navigation);
        }
    });
    function moveSlider(item, navigation) {
        if (!item.classList.contains('slider-wrapper')) return;
        const list = item.getElementsByClassName('slider-list')[0];
        const first = list.firstElementChild;
        const maxOffset = Math.round(list.childElementCount / (list.offsetWidth / first.offsetWidth)) * 100;
        const style = first.style;
        let marginLeft = parseInt(style.marginLeft);
        marginLeft = isNaN(marginLeft) ? 0 : marginLeft;
        marginLeft = marginLeft + ((navigation === 'prev') ? 100 : -100);
        marginLeft = ( marginLeft - maxOffset ) % maxOffset;
        style.marginLeft = marginLeft + '%';

        return item;
    }
})();

(() => {
    const thumbnails = document.querySelectorAll('.vertical-thumbnails li a');
    let active = document.querySelector('.vertical-thumbnails li a');
    const mainPreview = document.querySelector('.product-preview img');
    active.classList.add('active');
    [].slice.call(thumbnails).map(item => {
        item.onclick = () => {
            active.classList.remove('active');
            active = item;
            active.classList.add('active');
            mainPreview.setAttribute('src', active.dataset.imageUrl);
        }
    });
})();

});