<template>
    <aside id="sidebar" class="sidebar">

        <ul class="sidebar-nav" id="sidebar-nav">
            <li class="nav-item">
                <router-link class="nav-link " to="/profile">
                    <i class='bx bx-user-circle'></i>
                    <span>Manage Profile</span>
                </router-link>
            </li><!-- End Dashboard Nav -->
            <li class="nav-item">
                <router-link class="nav-link " to="/dashboard">
                    <i class='bx bxs-news' ></i>
                    <span>Your Press Releases</span>
                </router-link>
            </li><!-- End Dashboard Nav -->
            <li class="nav-item">
                <router-link class="nav-link " to="/packages">
                    <i class='bx bxs-add-to-queue' ></i>
                    <span>Submit Press Release</span>
                </router-link>
            </li><!-- End Dashboard Nav -->
            <li class="nav-item">
                <a class="nav-link " href="index.html">
                    <i class='bx bx-log-out-circle' ></i>
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