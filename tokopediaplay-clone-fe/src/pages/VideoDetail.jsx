import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import VideoContainer from '../components/VideoContainer'
import { useParams } from "react-router-dom";
import axios from 'axios';
import { base_url } from '../config';
import ProductsCard from '../components/ProductsCard';
import ChatContainer from '../components/ChatContainer';

function VideoDetail() {
  const { id } = useParams();
  const videoUrl = base_url + "/videos/" + id;
  const productsUrl = base_url + "/videos/" + id + "/products";

  const [video, setVideo] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getVideoDetail = () => {
    axios
      .get(videoUrl)
      .then((value) => {
        setVideo(value.data.data);
      })
      .then(() => {
        setLoading(false);
      })
      .catch((e) => setLoading(false));
  };

  const getProducts = () => {
    axios
      .get(productsUrl)
      .then((value) => {
        setProducts(value.data.data);
      });
  };

  useEffect(() => {
    if (id) {
      getVideoDetail();
      getProducts();
    }
  }, [id]);

  if (loading === true) {
    return <div>loading...</div>;
  }

  if (!video) {
    return <div>Page not found!</div>;
  }

  function renderProductsResults() {
    return(
      <>
        {
          products.map((product) => (
            <ProductsCard key={product._id} title={product.title} link={product.link} url_thumbnail={product.url_thumbnail} price={product.price}/>
          ))
        }
      </>
    );
  }

  return (
    <div className='pb-64'>
        <Navbar />
        <div className='flex gap-5 h-full px-5' id="main">
            <div className='w-3/4' id="product-container">
                <VideoContainer video_url={video.video_url} title={video.name} />
                <div className='flex flex-row gap-3 overflow-x-auto mt-5' id='productcard-container'>
                    {products.length > 0 && renderProductsResults()}
                </div>
            </div>
            <ChatContainer video_id={video._id} />
        </div>
    </div>
  )
}

export default VideoDetail