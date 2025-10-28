const n=20
const k=10
let questions=8

for(let i=0;i<n;i++){
    const regle=document.createElement('div')
    regle.className="regle"
    const phase=Math.round(Math.random()*100)
    const periode=Math.ceil(Math.random()*10)
    const grade=Math.round(Math.random()*(k-1))
    questions=8
    for(let j=0;j<k;j++){
        const slot=document.createElement('div')
        slot.className="slot"
        const tick=document.createElement('div')
        tick.className="tick"
        const label=document.createElement('div')
        label.className="label"
        slot.appendChild(tick)
        slot.appendChild(label)
        regle.appendChild(slot)
        if(j==grade){
            label.innerHTML=`${phase+j*periode}`
        }else if(j==(grade+1)){
            label.innerHTML=`${phase+j*periode}`
        }else if(Math.round(Math.random()*(10))<3){
            questions--
            label.innerHTML=""
        }else{
            label.style.border="none"
        }
    }
    if(questions==8){
        const slots=regle.querySelectorAll(".slot")
        if(grade==0){
            slots[2].querySelector(".label").style.border="2px solid black"
        }else{
            slots[0].querySelector(".label").style.border="2px solid black"
        }
    }
    document.body.appendChild(regle)
}