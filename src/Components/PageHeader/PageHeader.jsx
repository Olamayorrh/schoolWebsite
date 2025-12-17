import PageBanner from "./PageBanner";
import PageNav from "./PageNav";

const PageHeader = ()=>{
    return(
        <div className="header">
            <PageBanner />
            <PageNav />
        </div>
    )
};

export default PageHeader;