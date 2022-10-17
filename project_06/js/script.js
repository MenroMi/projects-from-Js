window.addEventListener('DOMContentLoaded', () => {

    function notificationsPage() {

        const counter = document.querySelector(".counter"),
              mark = document.querySelector(".mark"),
              notifications = document.querySelectorAll(".notification"),
              circleRed = document.querySelectorAll('.circle'),
              linkChessCLub = document.querySelectorAll(".chess-club");
    
        countNewNotifications();
        uncheckNewNotifications();
        marksAllAsRead();
    
        function countNewNotifications() {
    
            let count = 0
    
            notifications.forEach(item => {
                if(item.classList.contains("active")) {
                    count++;
                }
            })
    
            return counter.textContent = count;
    
        }
    
        function uncheckNewNotifications() {
    
            notifications.forEach((elem, i) => {
                if(elem.classList.contains("active")) {
                    elem.addEventListener('click', () => {
                        elem.classList.remove('active');
                        circleRed[i].classList.remove('circle');
                        countNewNotifications();
                    })
                }
            })
        }
        
        function marksAllAsRead() {
            mark.addEventListener('click', () => {
                notifications.forEach(elem => {
                    elem.classList.remove('active');
                })
                circleRed.forEach(elem => {
                    elem.classList.remove('circle');
                })
            })
        }
    
    }
    
    notificationsPage();

}
)