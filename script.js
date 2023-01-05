let currentScore1 = document.querySelector('.current-score1');
let currentScore2 = document.querySelector('.current-score2');
let score1 = document.querySelector('.score1');
let score2 = document.querySelector('.score2');
let btnRoll = document.querySelector('.roll');
let hold = document.querySelector('.hold');
let newGame = document.querySelector('.new');
let overlay1 = document.querySelector('.overlay1');
let overlay2 = document.querySelector('.overlay2');
let player1El = document.querySelector('.player1');
let player2El = document.querySelector('.player2');
let image = document.querySelector('img');



let score = [0,0]

let activePlayer = 1;
let currentSum =0; 

btnRoll.addEventListener('click',function(){
    let random = Math.trunc(Math.random()*5+1);
      image.src="media/"+random+".png";

      if(random !== 1){
        currentSum += random;
        document.querySelector(`.current-score${activePlayer}`).textContent=currentSum;
     
        
      }else{
        
        document.querySelector(`.current-score${activePlayer}`).textContent=0;
      
        activePlayer= activePlayer===1?2:1;
        currentSum=0;
      
         overlay1.classList.toggle('overlay');
         overlay2.classList.toggle('overlay');

        // document.querySelector(`.overlay${(activePlayer===1?2:1)}`).classList.add('overlay');

        // document.querySelector(`.overlay${activePlayer}`).classList.remove('overlay');
      
        
      }
    
     
      
      // random=Math.trunc(Math.random()*5+1);
      
})


    hold.addEventListener('click', function(){
        
      // if(activePlayer===1){
      //   score[0]+=currentSum;
      //  }else{
      //   score[1]+=currentSum;
      //  }

      score[activePlayer-1] +=currentSum;

       if(score[0]>= 20 || score[1]>= 20){
        
        hold.style.display='none';
        btnRoll.style.display='none';
        image.src='';

      }

       
        document.querySelector(`.current-score${activePlayer}`).textContent='0';      

        document.querySelector(`.score${activePlayer}`).textContent=score[activePlayer-1];
        

   if (score[0]<20 && score[1]<20 ){

    activePlayer= activePlayer===1?2:1;
    overlay1.classList.toggle('overlay');
    overlay2.classList.toggle('overlay');

   currentSum=0;
   }
       
        // console.log(currentSum);
        // activePlayer= activePlayer===1?2:1;
        // // document.querySelector(`.current-score${activePlayer}`).textContent='0';  
        
      
    })

newGame.addEventListener('click',function(){
  score[0]=0;
  score[1]=0;
  currentSum=0;
  activePlayer=1;
  currentScore1.textContent=0;
  currentScore2.textContent=0;
  score1.textContent=0;
  score2.textContent=0;
  overlay1.classList.remove('overlay');
  overlay2.classList.add('overlay');
  image.src='';
  hold.style.display='block';
 btnRoll.style.display='block';
 player1El.textContent='Player 1';
player2El.textContent='Player 2';
})





    
  
