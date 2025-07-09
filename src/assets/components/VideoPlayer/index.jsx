
const SRC =
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
export default function VideoPlayer() {

    return (
        <video src={SRC} className="w-60% h-120 border-2  object-cover"
            autoPlay
            muted
            loop
            controls    
            playsInline
        />
            
    );

}