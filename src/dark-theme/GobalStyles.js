//GLobal styles dark mode

import {createGlobalStyle } from 'styled-components';



export const GlobalStyles = createGlobalStyle`

    
    .page-content{
        background-color: ${({ theme }) => theme.body};
        color:${({ theme }) => theme.text};
        transition: all 0.50s linear;
    }

    //style pages/index//
    ////////////////////
    .header{
        background-image: url(${({ theme }) => theme.backgroundImg});

        .header-content{
            background:${({ theme }) => theme.backgroundGradients};

            .mouse-scroll{
                box-shadow: inset 0 0 0 1px ${({ theme }) => theme.primaryWhite};

                &::before{
                    background:${({ theme }) => theme.primaryWhite };
                }
            }
        }
    }
    
    .featured-container
    .title-bloc-post
    h2 a {
        color: ${({ theme }) => theme.primaryWhite };
    }




    //style templates/blog-post//
    ////////////////////////////

    .wrapper-articles
    .other-articles
    .title
    .btn-back-all-posts{
        color:${({ theme }) => theme.primaryWhite };
    }

    //style pages/contact//
    //////////////////////
    .page-contact
    .upload-cv-container
    .download-link
    a{
        color:${({ theme }) => theme.primaryWhite} !important;
    }

    //style templates/blog-post//
    ////////////////////////////
    .wrapper-articles
    .body-articles
    .share-btn{
        color:${({ theme }) => theme.primaryWhite}!important;
    }



    //style compoenents/layouts/sidebar//
    ////////////////////////////////////

    .sidebar{
        background-color:${({ theme }) => theme.primaryBlack};
    }
    .sidebar
    .nav-item
    a
    span{
            color:${({theme}) => theme.primaryWhite};
    }

    .sidebar
    .nav-item
    .nav-link
    span::before{
        background-color:${({ theme }) => theme.primaryWhite};
    }

    // style components/layouts/Navbar//
    ///////////////////////////////////

    .top-navbar{
        background-color: ${({ theme }) => theme.primaryBlack};

        .btn-menu .line-menu {
            background-color: ${({theme}) => theme.primaryWhite}
        }

        .social-menu .social-icon
        .nav-item .nav-link{
            color: ${({ theme }) => theme.primaryWhite};
        }
    }

    //style components/layouts/Footer//
    //////////////////////////////////

    .footer-container
    .footer-content
    .social-menu
    .social-icon
    .nav-item
    .nav-link{
        color: ${({ theme}) => theme.primaryWhite};
    }

    //style components/FeaturedPosts//
    /////////////////////////////////

    .featured-container
    .title-bloc-post
    a{
        color:${({ theme }) => theme.primaryWhite};
    }

     //style components/CardBlog//
    /////////////////////////////
    .grid-cards-posts
    .wrapper
    .card
    .card-body
    a{
        color:${({ theme }) => theme.primaryWhite};
    }

    //style components/OtherPostsCard//
    /////////////////////////////////

    .other-post-card
    .post-title
    p{
        color:${({ theme}) => theme.primaryWhite};
    }
`