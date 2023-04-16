import { FC, PropsWithChildren } from "react";
import Footer from "./Footer";
import Header from "./Header";

const HomeLayout:FC<PropsWithChildren> = ({children}) => {
    return (
        <div className="grid grid-rows-[auto_1fr_auto] h-screen">
            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;