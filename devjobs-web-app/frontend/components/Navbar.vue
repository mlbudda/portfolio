<template>
    <div class="navbar">
        <img src="/desktop/bg-pattern-header.svg" alt="" class="navbar-bg-desktop">
        <img src="/tablet/bg-pattern-header.svg" alt="" class="navbar-bg-tablet">
        <img src="/mobile/bg-pattern-header.svg" alt="" class="navbar-bg-mobile">
        <div class="padding-md">
            <div class="container vertical-center container-lg">
                <a href="/"><img src="/desktop/logo.svg" alt="DevJobs"></a>
                <ThemeToggler />
            </div>
        </div>
    </div>
</template>

<style scoped>
.navbar {
    height: 162px;
}

.container {
    display: flex;
    justify-content: space-between;
    align-content: center;
    position: relative;
    gap: 10px
}

.container.vertical-center {
    padding-top: 45px;
}

.navbar-bg-desktop {
    position: absolute;
    height: 161px;
    width: 100%;
}

.navbar-bg-tablet,
.navbar-bg-mobile {
    display: none;

}

@media (max-width: 768px) {
    .navbar-bg-desktop {
        display: none;
    }

    .navbar-bg-tablet {
        display: initial;
        position: absolute;
        height: auto;
    }
}

@media (max-width: 375px) {
    .navbar-bg-tablet {
        display: none;
    }

    .navbar-bg-mobile {
        display: initial;
        position: absolute;
        height: auto;
    }
}
</style>