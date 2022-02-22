import React, {useState, useEffect} from 'react';
import Welcome from './Welcome';
import BotonYT from './BotonYT';
import '../Youtube.css';
import axios from 'axios';

const YouTube = () => {
  const [channelId, setChannelId] = useState('');
  const [info, setInfo] = useState();
  const [info_vid, setInfo_vid] = useState();
  
  const youtubeGET = () => {
    const authkey = "AIzaSyAT9Ly4HbJxNj-v_AfEy_wQ9V8nWHsslew";
    //let channelId = "UC4B4SeTUPpPoItZVb_Rj91Q";
    let url = "https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id="+channelId+"&key="+authkey;
    let url_vid = "https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId="+channelId+"&maxResults=1&key="+authkey;
    axios.get(url).then(res => {
        setInfo(res.data.items[0]);
        console.log(res.data.items[0]);
    });
    axios.get(url_vid).then(res =>{
        setInfo_vid(res.data.items[0]);
    });
  };
  
  useEffect(() => {
    const authkey = "AIzaSyAT9Ly4HbJxNj-v_AfEy_wQ9V8nWHsslew";
    let channelId = "UC4B4SeTUPpPoItZVb_Rj91Q";
    let url = "https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id="+channelId+"&key="+authkey;
    let url_vid = "https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId="+channelId+"&maxResults=1&key="+authkey;
    axios.get(url).then(res => {
        setInfo(res.data.items[0]);
    });
    axios.get(url_vid).then(res =>{
        setInfo_vid(res.data.items[0]);
    });
    //youtubeGET();
  }, []);

  const youtubeChannel = () => {
    window.open("https://www.youtube.com/channel/"+info?.id+"/", "_blank");
  }

  const youtubeVideo = () => {
    window.open("https://www.youtube.com/watch?v="+info_vid?.id.videoId+"/", "_blank");
  }

  return (
    <>
        <Welcome/>
        <div className='youtube'>
            <label id="id_canal" className="id_canal">
                ID del canal:
            </label><br />
            <input type="text" name="id_canal" id="input-id_canal" className="input-id_canal" onBlur={event => setChannelId(event.target.value)}/><br/>
            <BotonYT boton="Enviar" link={youtubeGET}/><br />
            <label htmlFor="canal_img" className="canal_img">
                Imagen del Canal:
            </label>
            <div className='imagen' style={{backgroundImage: `url(${info?.snippet.thumbnails.high.url})`, backgroundSize: 'cover'}}>
                {/* <img src={info?.snippet.thumbnails.high.url}/> */}
            </div>
            <label htmlFor="id_canal" className="id_canal">
                Nombre del canal:
            </label><br />
            <div id="info_canal" className="info_canal">
                {info?.snippet.title}
            </div>
            <label htmlFor="id_canal" className="id_canal">
                Número de Subscriptores:
            </label><br />
            <div id="info_canal" className="info_canal">
                {info?.statistics.subscriberCount}
            </div>
            <label htmlFor="id_canal" className="id_canal">
                Cantidad de videos:
            </label><br />
            <div id="info_canal" className="info_canal">
                {info?.statistics.videoCount}
            </div>
            <label htmlFor="id_canal" className="id_canal">
                Número de visitas:
            </label><br />
            <div id="info_canal" className="info_canal">
                {info?.statistics.viewCount}
            </div>
            <label htmlFor="id_canal" className="id_canal">
                Descripción:
            </label><br />
            <div id="descripcion_canal" className="descripcion_canal">
                {info?.snippet.description}
            </div>
            <label htmlFor="id_canal" className="id_canal">
                País:
            </label><br />
            <div id="info_canal" className="info_canal">
                 {info?.snippet.country}
            </div>
            <BotonYT boton="Visitar Canal" link={youtubeChannel}/>
            <h4>
                Último video del canal
            </h4>
            <label htmlFor="id_canal" className="id_canal">
                Título:
            </label><br />
            <div id="info_canal" className="info_canal">{info_vid?.snippet.title}</div>
            <label htmlFor="id_canal" className="id_canal">
                Descripción:
            </label><br />
            <div id="info_canal" className="info_canal">{info_vid?.snippet.description}</div>
            <label htmlFor="id_canal" className="id_canal">
                Miniatura del video:
            </label><br />
            <div className='miniatura' style={{backgroundImage: `url(${info_vid?.snippet.thumbnails.high.url})`, backgroundSize: 'cover'}}>

            </div>
            <BotonYT boton="Ir al Video" link={youtubeVideo}/>
        </div>
    </>
  );
};

export default YouTube;
