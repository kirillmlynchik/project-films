"use strict";
const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?','');
console.log( numberOfFilms);

const personalMovieDB= { 
  count: numberOfFilms,
  movies:{},
  actors:{},
  genres:[],
  private:false
};




for (let i = 0; i < 2; i++) {
    const a = prompt('Один из просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его', '');
       

      if(a != null && b != null && a !='' && b !='' && a.length < 50 ){
        personalMovieDB.movies[a] = b;
        console.log('done');
      } else {
        console.log('error');
        i--;
      }


}


if (personalMovieDB.count<10){
  console.log('Просмотрено довольно фильмов');
}else if (personalMovieDB.count>9 && personalMovieDB.count< 30){
  console.log('Вы классический зритель');
}else if (personalMovieDB.count>29){
  console.log('Вы киноман');
}else {
  (console.log('Произошла ошибка'));
}

    

console.log(personalMovieDB);



    
    
    
    
    


