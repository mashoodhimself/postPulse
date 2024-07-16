<template>
    <Header />
    <Aside />

    <main id="main" class="main">
        <div class="pagetitle">
            <h1>Edit Press Release</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li class="breadcrumb-item active">Edit Press-Release</li>
                </ol>
            </nav>
        </div><!-- End Page Title -->

        <section class="section profile">
            <div class="row">
                <div class="col-xl-12">
                    <div class="card">
                        <div class="card-body">
                            <form class="mt-5 mb-5" action="">
                                <div class="row mb-3">
                                    <div class="col-md-12">
                                        <label for="">PR title</label>
                                        <input type="text" name="pr_title" id="pr_title" class="form-control" placeholder="Enter Press-Release title">
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-md-12">
                                        <label for="">Upload Logo</label>
                                        <input type="file" name="pr_logo" id="pr_logo" class="form-control" placeholder="Enter Press-Release title">
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-md-12">
                                        <label for="">PR Content</label>
                                        <textarea cols="40" rows="20"name="pr_content" id="pr_content" class="form-control"></textarea>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-md-12">
                                        <label class="mb-3"for="">Contact Information</label>
                                        <input type="text" name="full_name" id="full_name" placeholder="Full name" class="form-control mb-2">
                                        <input type="text" name="email" id="email" placeholder="Email" class="form-control mb-2">
                                        <input type="text" name="job" id="job" placeholder="Designation" class="form-control mb-2">
                                        <input type="text" name="website" id="website" placeholder="Website" class="form-control mb-2">
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-md-12">
                                        <label for="">Keywords</label>
                                        <input type="text" name="pr_keywords" id="pr_keywords" class="form-control" />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-md-12">
                                        <label for="">Publish Time</label>
                                        <input type="date" name="pr_time" id="pr_time" class="form-control" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <router-link to="/preview/pressrelease" class="btn btn-primary">Update</router-link>
                                    </div>
                                </div>
                            </form>
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