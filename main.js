// Start with Name of Allah
const button = document.querySelector("button");
const form = document.querySelector("form");
const input = document.querySelector("input");
console.log(button);
console.log(input);

// button.addEventListener("click", (eo) => {
//     eo.preventDefault()
//     container.innerHTML += `
//                                 <div class="task">
//                                     <span class="icon-star icon"> </span>
//                                     <p class="task-desc"> ${input.value}</p>
//                                     <div>
//                                         <span class="icon-trash icon"> </span>
//                                         <span class="icon-angry2 icon"> </span>
//                                     </div>
//                                 </div>
//                             `
// })
// note when using button on event , use event as a click
// when when using form on event , use event as a submit i.e

form.addEventListener("submit", (eo) => {
    eo.preventDefault();
    const task = `                
                                <div class="task">
                                    <span id="star" class="icon-star icon"> </span>
                                    <p  lang="ar" id="taskInp" class="task-desc"> ${input.value}</p>
                                    <div>
                                        <span id="trash" class="icon-trash icon"> </span>
                                        <p id = "top-trash" class = "trash-top" > &#128579; هتمسح قبل ما تعملها يا معاااافر ادي دقني لو فلحت </p>
                                        <span id="angry" class="icon-angry2 icon"> </span>
                                    </div>
                                </div>
                            `;
    container.innerHTML += task;
    input.value = "";
});
// second phase , whem click on trash to remove parent element
const container = document.getElementById("container");

container.addEventListener("click", (eo) => {
    if (eo.target.className == "icon-trash icon") {
        eo.target.parentElement.parentElement.remove();
    } else if (eo.target.className == "icon-angry2 icon") {
        eo.target.classList.add("dn");
        const heart = ` <span id="heart" class="icon-heart icon"> </span> `;
        eo.target.parentElement.parentElement
            .getElementsByClassName("task-desc")[0]
            .classList.add("finish");
        const task = eo.target.parentElement.parentElement;
        console.log(task)
        const tra = eo.target.parentElement.parentElement.getElementsByClassName("trash-top")[0];
        console.log(tra)
        tra.innerHTML = " &#128579; امسح يا صاحبي امسح خف من علي ضهرك";
        eo.target.parentElement.innerHTML += heart;
    } else if (eo.target.className == "icon-heart icon") {
        eo.target.parentElement.parentElement
            .getElementsByClassName("task-desc")[0]
            .classList.remove("finish");
        eo.target.classList.add("dn");
        const addAngery = `<span class="icon-angry2 icon"> </span>`;
        const task = eo.target.parentElement;
        console.log(task)
        const tra = eo.target.parentElement.parentElement.getElementsByClassName("trash-top")[0];
        console.log(tra)
        tra.innerHTML = " &#128579;  هتمسح قبل ما تعملها يا معاااافر ادي دقني لو فلحت";
        eo.target.parentElement.innerHTML += addAngery;
    } else if (eo.target.className == "icon-star icon") {
        eo.target.classList.add("star-top");
        container.prepend(eo.target.parentElement);
    } else if (eo.target.className == "icon-star icon star-top") {
        eo.target.classList.remove("star-top");
        container.append(eo.target.parentElement);
    }
});
