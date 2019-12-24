$(document).ready(() => {
    const HomeRoute = $('#HomeRoute');
    const StoreRoute = $('#StoreRoute');
    const StoreBtn = $('#StoreBtn');

    HomeRoute.click(e => {
        e.preventDefault();
        window.location.replace('/')
    })

    StoreRoute.click(e => {
        e.preventDefault();
        window.location.replace('/store');
    })


    StoreBtn.click(e => {
        e.preventDefault();
        window.location.replace('/store');
    })
})
