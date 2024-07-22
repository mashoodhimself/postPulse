<template>
    
    <Header />
    <Aside />

    <main id="main" class="main">

        <div class="pagetitle">
            <h1>Dashboard</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li class="breadcrumb-item active">Dashboard</li>
                </ol>
            </nav>
        </div><!-- End Page Title -->

        <section class="section dashboard">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <DataTable class="display">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Press Release</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Battles of Oqbah Bin Nafih In North Africa</td>
                                        <td>Paid</td>
                                        <td> - </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Battles of Oqbah Bin Nafih In North Africa</td>
                                        <td>Paid</td>
                                        <td> - </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Battles of Oqbah Bin Nafih In North Africa</td>
                                        <td>Paid</td>
                                        <td> - </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Battles of Oqbah Bin Nafih In North Africa</td>
                                        <td>Paid</td>
                                        <td> - </td>
                                    </tr>
                                </tbody>
                            </DataTable>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </main><!-- End #main -->

    <Footer />

</template>

<script>

import Header from './includes/HeaderComponent.vue';
import Aside from './includes/AsideComponent.vue';
import Footer from './includes/FooterComponent.vue';

import DataTablesLib from 'datatables.net'; 
import DataTable from 'datatables.net-vue3';
 
DataTable.use(DataTablesLib);

export default {
    components: {
        Header,
        Aside,
        Footer,
        DataTable
    }
}
</script>

<style>
    @import 'datatables.net-dt'; 
</style>