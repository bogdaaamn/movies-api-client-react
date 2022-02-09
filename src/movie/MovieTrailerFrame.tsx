import React from 'react';

function YoutubeFrame(props: { ytKey: string }) {
  return (
    <iframe
      className="w-full h-screen"
      src={`https://www.youtube-nocookie.com/embed/${props.ytKey}`}
      frameBorder="0"
      allow="encrypted-media; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  );
}

function VimeoFrame(props: { vimeoKey: string }) {
  return (
    <iframe
      className="w-full h-screen"
      src={`https://player.vimeo.com/video/${props.vimeoKey}?byline=false&title=false&portrait=false`}
      frameBorder="0"
      allow="autoplay; fullscreen"
      allowFullScreen
      title="Embedded youtube"
    />
  );
}

function MovieTrailerFrame(props: { url: string }) {
  return (
    <div>
      {props.url.includes('youtube') && (
        <YoutubeFrame ytKey={props.url.split('v=')[1]} />
      )}
      {props.url.includes('vimeo') && (
        <VimeoFrame vimeoKey={props.url.split('/')[3]} />
      )}
    </div>
  );
}

export default MovieTrailerFrame;
