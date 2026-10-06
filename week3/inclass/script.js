 let thisPage = document.getElementById("docBody")
            let colorBtn = document.getElementById("colorChange")
            let textBtn = document.getElementById("addText")
            let toggleBtn = document.getElementById("toggleBtn")
            let imgTT = document.getElementById ("imageToToggle")
                
            let changingColor = () => {
                let redC = Math.random() * 255
                let greenC = Math.random() * 255
                let blueC = Math.random() * 255

                thisPage.style.backgroundColor =  "rgb("+ redC +", " + greenC +", "+ blueC +")"
                
            }
            let addingText =() => {
                let textRecepticle = document.getElementById("textArea")

                let newElem = document.createElement("p")
                console.log(newElem)
                newElem.innerHTML = "lorem ipsum dolor sit amet consectetur adipiscing elit imperdiet et voluptas est voluptate id anim laboris dolor aliqua praesentium ad nihil omnis dignissimos placeat distinctio provident voluptas excepturi provident occaecat non qui sunt quos laboris soluta elit fugiat pariatur esse cupidatat ex adipiscing enim enim qui reprehenderit aute animi similique"

                textRecepticle.appendChild(newElem)
            }

            let togglingImage = (event) => {
        

               
                if(imgTT.alt == "First Brainrot Image"){
                    imgTT.alt = "Second Brainrot Image"
                    imgTT.src = "images/brainrot2.jpg"
                }
                else{
                    imgTT.alt = "First Brainrot Image"
                    imgTT.src = "images/brainrot1.jpg"
                }
               // console.log (imgTT)

            }

            console.log(imgTT)

            imgTT.addEventListener("click", togglingImage)
            colorBtn.addEventListener("click", changingColor)
            textBtn.addEventListener("click", addingText)
            toggleBtn.addEventListener("click", togglingImage)