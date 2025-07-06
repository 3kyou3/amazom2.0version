
function showChoice(item){
    const body = document.body;
    const html = document.documentElement;

    ["bookPage", "housePage", "carPage"].forEach(
        id => document.getElementById(id).className = "hidden"
    );

    document.getElementById(item.toLowerCase() + "Page").className = "visible";

    html.style.overflow = "auto";
    body.style.overflow = "auto";

    document
    .getElementById(item.toLowerCase() + "Page")
    .scrollIntoView({behavior: "smooth"});
}

document.addEventListener("DOMContentLoaded", () =>{
    const bookRow = document.querySelector(".bookrow");
    const houseRow = document.querySelector(".housesrow");
    const carPage = document.getElementById("carPage");
    if (bookRow){
        bookRow.addEventListener('click', (Event) =>{
            const book = Event.target.closest(".book");
            if(book){
                const bookTitle = book.textContent.trim();
                const bookURL = book.dataset.url;
                if (bookURL){
                    history.pushState({page: 'book'}, '', '#book');
                    window.location.href = bookURL;
                }
                else{
                    console.log(`cant do shit ${bookTitle}`);
                }
            }
        })
    }
    if (houseRow){
        houseRow.addEventListener("click", Event =>{

            if(Event.target.classList.contains("moreBtn")){
                const house = Event.target.closest(".house");
                if(house){
                const houseURL = house.dataset.url;
                if(houseURL)
                {
                    history.pushState({page: "house"}, '', '#house')
                    window.location.href = houseURL;
                }
            }

            }
        })
    }
    if (carPage){
        carPage.addEventListener("click", Event =>{
            if (Event.target.classList.contains("car-btn")){
                const carBlock = Event.target.closest(".car-block");
                if (carBlock){
                    const carURL = carBlock.dataset.url;
                    if (carURL){
                        history.pushState({page: "car"}, "", "#car");
                        window.location.href = carURL;
                    }
                }
            }
        })
    }
})

function initRouting(){
    const page = location.hash.slice(1);
    if(['book', 'house','car'].includes(page)){
        showChoice(page);
    }
}
window.addEventListener('DOMContentLoaded', initRouting);
window.addEventListener('popstate', initRouting);