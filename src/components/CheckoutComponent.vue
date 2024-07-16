<template>

    <Header />
    <main id="main" class="main">
        <div class="pagetitle">
            <h1>Checkout</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li class="breadcrumb-item active">Checkout</li>
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
                                    <h3>Use Coupon Code</h3>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                    <form action="" class="coupon__form_checkout">
                                        <input type="text" name="coupon_code" id="coupon_code" class="form-control">
                                        <button class="btn btn-secondary">Apply Coupon</button>
                                    </form>
                                </div>
                            </div>

                            <div class="row checkout_info_row">
                                <div class="col-md-12">
                                    <h3>Checkout Information</h3>
                                    <table class="table">
                                        <tbody>
                                            <tr>
                                                <th>Selected Package</th>
                                                <td>Premium</td>
                                            </tr>
                                            <tr>
                                                <th>Package Price</th>
                                                <td>500$</td>
                                            </tr>
                                            <tr>
                                                <th>Discount</th>
                                                <td>0$</td>
                                            </tr>
                                            <tr>
                                                <th>Total</th>
                                                <td>500$</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div class="row payment_options_cont">
                                <div class="col-md-12">
                                    <h3 class="mt-5 mb-3">Payment Options</h3>
                                    <button class="btn btn-primary">Pay with Stripe</button>
                                    <button class="btn btn-primary">Pay with Paypal</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    </main>
    <Aside/>
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