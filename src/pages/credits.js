import React from 'react';

import Fade from 'react-reveal/Fade';

//import customs components
import PageLayout from '../components/layouts/PagesLayout';



const CreditsPage = () => {



    return(
        <PageLayout>
            <Fade>
                <section className="credit-page-container">
                    <div className="credit-page-content container">
                        <div className="wrapper credit-img">
                            <h2>photos</h2>
                            <span>Photo by <a href="https://unsplash.com/@vinhan?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">An Tran</a> on <a href="https://unsplash.com/s/photos/cloud?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
                            <span>Photo by <a href="https://unsplash.com/@nathananderson?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Nathan Anderson</a> on <a href="https://unsplash.com/s/photos/stellar?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
                        </div>
                    </div>
                </section>
            </Fade>
        </PageLayout>
    )
}


export default CreditsPage;