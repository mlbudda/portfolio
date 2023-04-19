<template>
    <div>
        <div class="padding-md">
            <div class="header overlap container-md">
                <div class="group">
                    <div :style="styleLogo" class="logo-brand"></div>
                    <div class="company">
                        <h2>{{ currentPost.company }}</h2>
                        <p>{{ currentPost.company.toLowerCase() + ".com" }}</p>
                    </div>
                </div>
                <a :href="currentPost.website" target="_blank" class="button align-last">Company Site</a>
            </div>
            <div class="container-md main-content">
                <div class="header-wrapper">
                    <div>
                        <div class="main-header-meta">
                            <p>{{ currentPost.postedAt }}</p>
                            <p>.</p>
                            <p>{{ currentPost.contract }}</p>
                        </div>
                        <h1>{{ currentPost.position }}</h1>
                        <p class="location">{{ currentPost.location }}</p>
                    </div>
                    <div class="apply-no-wrapper">
                        <AppButton :on-click="onApply" full-width="true">Apply Now</AppButton>
                    </div>
                </div>

                <p class="content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit.
                    Pellentesque
                    aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula
                    sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam
                    mollis. Ut
                    justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus
                    metus
                    libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus.
                    Praesent
                    elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis,
                    mi
                    neque
                    euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus
                    sed,
                    urna.</p>

                <div class="requirements-wrapper">
                    <ContentWithList title="Requirements" :items="currentPost.requirements.items" :ordered="false">{{
                        currentPost.requirements.content }}
                    </ContentWithList>
                </div>
                <div class="role-wrapper">
                    <ContentWithList title="What You Will Do" :items="currentPost.role.items" :ordered="true">{{
                        currentPost.role.content }}
                    </ContentWithList>
                </div>
            </div>
        </div>
        <Footer :position="currentPost.position" :company="currentPost.company" :on-click="onApply" />
    </div>
</template>

<style scoped>
.header {
    height: 140px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--secondary-bg-color);
    padding-right: min(43px, max(15px, 4vw));
}

.group {
    display: flex;
    align-items: center;
    gap: min(40px, max(15px, 4vw));
    padding-right: 10px;
}

.logo-brand {
    height: 140px;
    width: 140px;
    border-bottom-left-radius: 6px;
}

.button {
    background-color: var(--btn-company-bg);
    color: var(--btn-company-text);
    text-decoration: none;
}

.button:hover {
    background-color: var(--btn-company-hover);

}

h1 {
    color: var(--primary-color-3);
}

.main-content {
    background-color: var(--secondary-bg-color);
    padding: min(48px, max(24px, 5vw));
    color: var(--secondary-color-4);
}

.company {
    color: var(--secondary-color-4);
}

.main-header-meta {
    display: inline-flex;
    gap: 12px;
}

.header-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.content {
    margin-top: 40px;
}

.requirements-wrapper {
    margin-block: 40px 28px;
}

.role-wrapper {
    margin-block: 48px 23px;
}

.location {
    color: var(--primary-color-1);
}

@media (max-width: 435px) {
    .header {
        height: 205px;
        display: grid;
        justify-items: center;
        justify-content: center;
        border-radius: 6px;
        padding-right: 0;
    }

    .group {
        display: grid;
        justify-items: center;
        gap: 0;
    }

    .logo-brand {
        height: 50px;
        width: 50px;
        border-radius: 15px;
        position: relative;
        top: -38px;
    }

    h1 {
        font-size: 20px;
    }

    .header-wrapper {
        display: grid;
        place-items: center;
        gap: 50px;
    }

    .apply-no-wrapper {
        width: 100%;
    }

}
</style>

<script setup>
const posts = useState('postList')
const route = useRoute()
const currentPost = posts.value.find(post => parseInt(post.id) === parseInt(route.params.id))

const styleLogo = reactive({
    background: `no-repeat center url(/logos/${currentPost.logo.split('/').at(-1)}),` + currentPost.logoBackground,
})

function onApply() {
    console.log("You successfully aplied!")
}

</script>
