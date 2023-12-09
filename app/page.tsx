import Logo from "./components/Logo";
import Navbar from "./components/Navbar"
import MyImage from "./components/MyImage";
import ShortGallery from "./components/shortGallery"

export default function Page() {
  return (
    <body>
    <Logo/>
    <Navbar/>
    <MyImage/>
    <ShortGallery/>
    </body>
  );
}