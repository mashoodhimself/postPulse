<template>
    <Header />
    <Aside />

    <main id="main" class="main">
        <div class="pagetitle">
            <h1>Create Press Release</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li class="breadcrumb-item active">Create Press-Release</li>
                </ol>
            </nav>
        </div><!-- End Page Title -->

        <section class="section profile">
            <div class="row">
                <div class="col-xl-12">
                    <div class="card">
                        <div class="card-body mt-5 mb-5">
                            <div class="row">
                                <div class="col-md-12">
                                    <h4>Press Release:</h4>
                                    <p>Battles of Oqbah Bin Nafe</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <h4>Logo:</h4>
                                    <p>Battles of Oqbah Bin Nafe</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <h4>Content:</h4>
                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quam facere odio, error, placeat non cum distinctio tempora vero aliquam totam dolore molestiae, odit laborum ipsa sit veniam officiis sunt? </p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <h4>Keywords:</h4>
                                    <p>One, two, three, four</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <h4>Publish Time:</h4>
                                    <p> 15, June 2024 </p>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                    <button class="btn btn-secondary">Edit</button>
                                    <button class="btn btn-primary">Checkout</button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </main>

    <Footer />
</template>

<script>

    import Header from './includes/HeaderComponent.vue';
    import Aside from './includes/AsideComponent.vue';
    import Footer from './includes/FooterComponent.vue';

    export default {
        components: {
            Header, Aside, Footer
        }
    }
</script>