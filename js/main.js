// https://jquery-docs.ru/
// https://jsonplaceholder.typicode.com/

const postSection = document.getElementById('post-section');
const baseUrl = 'https://jsonplaceholder.typicode.com';

let countPhoto;
$.ajax({
    url: baseUrl + "/albums",
    method: "GET",
    dataType: "json",
    success: function(albums){
        albums.forEach(album => {
            drawAlbum(album);
        });

        $.ajax({
            url: baseUrl + "/photos",
            method: "GET",
            dataType: "json",
            success: function(photos){
                photos.forEach(photo => {
                    drawPhoto(photo);
                });


                
            }
        });


    },
    error: function(e){
        console.log(e);
    }
});




function drawAlbum(album){
    let div = document.createElement('div');
    div.classList.add('album');
    let p = document.createElement('p');
    p.innerText = 'album title: '+album.title;
    let h3  = document.createElement('h3');
    h3.innerText = 'userId: '+album.userId;
    let h5  = document.createElement('h5');
    h5.innerText = 'id: '+album.id;
   
    let count  = document.createElement('h5');
    count.innerText = 'Количество фотографий в альбоме: '+countPhoto;


    div.append(p);
    div.append(h3);
    div.append(h5);
    div.append(count);
   

    div.id = 'album_' + album.id;

    let button = document.createElement('a');
    button.href = '#';
    button.innerText = 'Просмотреть фото'
    div.append(button);

    let photo_section = document.createElement('div');
    photo_section.classList.add('photo-section');
    photo_section.style.display = 'none';
    div.append(photo_section);

    postSection.append(div);

    button.addEventListener('click', function(){
        if(photo_section.style.display == 'block'){
            photo_section.style.display = 'none';
        }else{
            photo_section.style.display = 'block';
        }
    });
}



function drawPhoto(photo){
    let div_photo = document.createElement('div');
    div_photo.classList.add('photo');
    let h4 = document.createElement('h4');
    h4.innerText = photo.title;
    let img=document.createElement('img');
   
    div_photo.append(h4);
    div_photo.append(img);
    div_photo.id = 'photo_' + photo.id;
    countPhoto=Math.max(photo.id);
    let photo_section = document.getElementById('album_'+photo.albumId).querySelector('.photo-section');
    photo_section.append(div_photo);
}
/**
 * Практическое задание: 
 * 
 * Вывести все альбомы (https://jsonplaceholder.typicode.com/albums) и у каждого
 * из альбомов вывести их фотографии (https://jsonplaceholder.typicode.com/photos)
 * Изначально у альбома отображается только название и кол-во фотографии и кнопка 
 * "Посмотреть", а при нажатии на кнопку "Посмотреть", отображает весь список фотографий
 */