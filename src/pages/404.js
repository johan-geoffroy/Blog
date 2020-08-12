import React from 'react';


import {Link} from 'gatsby';

import PageLayout from '../components/layouts/PagesLayout';

const PageNotFound = () => {

    return(
    <PageLayout>
        <section className="page-404">
            <div className="page-error-content">
                <h1>erreur</h1>
                <span>404</span>
                <p>Cette page n’existe pas !</p>
                    <Link to="/">i com back</Link>
            </div>
        </section>
    </PageLayout>
    )
}

export default PageNotFound;