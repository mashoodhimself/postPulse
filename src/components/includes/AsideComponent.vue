<template>
    <aside id="sidebar" class="sidebar">

        <ul class="sidebar-nav" id="sidebar-nav">
            <li class="nav-item">
                <router-link class="nav-link " to="/profile">
                    <i class="bi bi-grid"></i>
                    <span>Manage Profile</span>
                </router-link>
            </li><!-- End Dashboard Nav -->
            <li class="nav-item">
                <router-link class="nav-link " to="/dashboard">
                    <i class="bi bi-grid"></i>
                    <span>Your Press Releases</span>
                </router-link>
            </li><!-- End Dashboard Nav -->
            <li class="nav-item">
                <router-link class="nav-link " to="/create/pressrelease">
                    <i class="bi bi-grid"></i>
                    <span>Submit Press Release</span>
                </router-link>
            </li><!-- End Dashboard Nav -->
            <li class="nav-item">
                <a class="nav-link " href="index.html">
                    <i class="bi bi-grid"></i>
                    <span>Sign Out</span>
                </a>
            </li><!-- End Dashboard Nav -->
        </ul>

    </aside><!-- End Sidebar-->
</template>

<script>
export default {

}
</script>