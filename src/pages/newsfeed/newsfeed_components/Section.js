import Sidebar from './section_components/Sidebar'
import CenterMeta from './section_components/CenterMeta'
import Sidebar2 from './section_components/Sidebar2'

export default function Section() {
    return (
        <section>
            <div className="gap2 gray-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row merged20" id="page-contents">
                                <Sidebar />
                                <CenterMeta />
                                <Sidebar2 />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}