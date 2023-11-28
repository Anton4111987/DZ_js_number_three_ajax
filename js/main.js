// https://jquery-docs.ru/
// https://jsonplaceholder.typicode.com/

const postSection = document.getElementById('post-section');
const baseUrl = 'https://jsonplaceholder.typicode.com';


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




function drawPost(post){
    let div = document.createElement('div');
    div.classList.add('post');
    let h3  = document.createElement('h3');
    h3.innerText = post.title;
    let p = document.createElement('p');
    p.innerText = post.body;

    div.append(h3);
    div.append(p);

    div.id = 'post_' + post.id;

    let button = document.createElement('a');
    button.href = '#';
    button.innerText = 'Комментарии:'
    div.append(button);

    let comment_section = document.createElement('div');
    comment_section.classList.add('comment-section');
    comment_section.style.display = 'none';
    div.append(comment_section);

    //postSection.append(div);

    
    let button_album=document.createElement('a');
    button_album.href = '#';
    button_album.classList.add('button_Album');
    button_album.innerText = 'Альбомы ';  //  + '('+ Math.max(album.userId) +')';
    div.append(button_album);

    let album_section = document.createElement('div');
    album_section.classList.add('album-section');
    album_section.style.display = 'none';
    div.append(album_section);

    postSection.append(div);


    button.addEventListener('click', function(){
        if(comment_section.style.display == 'block'){
            comment_section.style.display = 'none';
        }else{
            comment_section.style.display = 'block';
        }
    });

    button_album.addEventListener('click', function(){
        if(album_section.style.display == 'block'){
            album_section.style.display = 'none';
        }else{
            album_section.style.display = 'block';
        }
    });
}



function drawAlbum(album){
    let div_album = document.createElement('div');
    div_album.classList.add('album');
    let h4 = document.createElement('h4');
    h4.innerText = album.title;
   
    div_album.append(h4);

    div_album.id = 'album_' + album.id;

    let album_section = document.getElementById('post_'+album.userId).querySelector('.album-section');
    album_section.append(div_album);
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

    let photo_section = document.getElementById('album_'+photo.albumId).querySelector('.photo-section');
    photo_section.append(div_album);
}
/**
 * Практическое задание: 
 * 
 * Вывести все альбомы (https://jsonplaceholder.typicode.com/albums) и у каждого
 * из альбомов вывести их фотографии (https://jsonplaceholder.typicode.com/photos)
 * Изначально у альбома отображается только название и кол-во фотографии и кнопка 
 * "Посмотреть", а при нажатии на кнопку "Посмотреть", отображает весь список фотографий
 */