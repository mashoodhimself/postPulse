<template>
    <Header />
    <Aside />
    <main id="main" class="main">
        <div class="pagetitle">
            <h1>Our Packages</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li class="breadcrumb-item active">Packages</li>
                </ol>
            </nav>
        </div><!-- End Page Title -->
        <section class="section">
            <div class="row">
                <div class="col-xl-12">
                    <div class="card">
                        <div class="card-body mt-5 mb-5">
                            <div class="row">
                                <div class="col-md-12">
                                    <h3> Products & Packages </h3>
                                </div>
                            </div>
                            <div class="row product_items">
                                <div class="col-md-6">
                                    <div class="fs-1">700$</div>
                                    <img style="width: 300px;" src="../assets/img/package_1.webp" alt="">
                                    <h4>Press Release Newswire</h4>
                                    <router-link to="/create/pressrelease" class="btn btn-primary">Buy Now</router-link>
                                </div>
                                <div class="col-md-6">
                                    <div class="fs-1">1500$</div>
                                    <img style="width: 300px;" src="../assets/img/package_2.webp" alt="">
                                    <h4>Corporate Newswire</h4>
                                    <router-link to="/create/pressrelease" class="btn btn-primary">Buy Now</router-link>
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
        components: { Header, Aside, Footer }
    }

</script>