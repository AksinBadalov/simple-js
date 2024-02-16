const btnElement=document.getElementById('btnForst')
const spanElement=document.getElementById('spanClose')
const inputForst=document.getElementById('inputForst')
const inputSekind=document.getElementById('inputSekind')
const inputArea=document.getElementById('textAREA')
const inputNext=document.getElementById('inputNext')
const mainDiv=document.getElementById('main')
const bosdiv=document.getElementById('Boshdiv')

let array=[];
btnElement.addEventListener('click',()=>{
    mainDiv.style.display='block'
});

spanElement.addEventListener('click',()=>{
    mainDiv.style.display='none'
    bosdiv.style.display='none'
});

inputNext.addEventListener('click',()=>{
    bosdiv.innerHTML="";
 let VaLue={
    title: inputForst.value ,
    price: inputSekind.value,
    descripton: inputArea.value
};
array.push(VaLue)
// console.log(array);

array.map((elements)=>{
  const DivElement=document.createElement('div');  
  const pElement=document.createElement('p');
  pElement.textContent=elements.title;
  const pElement1=document.createElement('p')
  pElement1.textContent=elements.price;
  const pElement2=document.createElement('p');
  pElement2.textContent=elements.descripton;

  DivElement.append(pElement,pElement1,pElement2)
  DivElement.classList.add('dicvlasss')
//   bosdiv.classList.add('divClasee') 
  bosdiv.append(DivElement);
    
 });
});