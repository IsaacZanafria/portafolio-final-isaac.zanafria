export function cargarCards(array, element){
    element.innerHTML = ""
    array.forEach(function(task){
        let superhost = ` <span
              class="text-gray-700 font-sans font-bold text-xs border-2 rounded-xl px-3 h-7 flex items-center"
              >SUPERHOST</span
            >`
        let bed = `. ${task.beds} beds`
        if(task.superHost === false){
            superhost = ""
        }
        if(task.beds === null){
          bed = ""
        }
        const template = 
                `<div
          class=" w-90 md:w-86 lg:w-100 lg:mb-3 h-77 lg:h-90 rounded-md flex flex-col items-center"
        >
          <img
            class="w-full h-60 lg:h-70 rounded-4xl mb-2"
            src="${task.photo}"
            alt="${task.title}"
          />

          <div class="w-15/16 lg:w-19/20 flex items-center justify-between mb-1">
            ${superhost}
            <p class="font-sans w-42 md:w-41 lg:w-47 text-sm lg:text-base text-gray-500 font-semibold">
              ${task.type} ${bed}
            </p>

            <div class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5 fill-orange-500 stroke-0"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
              <p class="text-sm">${task.rating}</p>
            </div>
          </div>

          <h5
            class="font-sans font-semibold lg:text-lg w-full px-3 tracking-tight"
          >
            ${task.title}
          </h5>
        </div>`;
            element.innerHTML += template
    });
}
