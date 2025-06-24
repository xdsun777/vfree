<template>
    <!-- 主体窗口 -->
    <main class="dark:bg-primary-dark-3 flex-1 overflow-y-auto pb-20">
        <div
            class="chat-item flex transform cursor-pointer items-center p-4 transition-transform duration-300 hover:scale-101"
            data-chat-id="telegram"
        >
            <div
                class="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-lg font-bold text-white"
            >
                <img
                    alt="Telegram Official"
                    class="h-full w-full rounded-full object-cover"
                    src="https://design.gemcoder.com/staticResource/echoAiSystemImages/96b90b42bd9eba6a95e1210a2483f2af.png"
                />
            </div>
            <div class="flex-1">
                <div class="flex items-center justify-between">
                    <h2
                        class="text-base font-semibold text-gray-800 dark:text-white"
                    >
                        Telegram
                    </h2>
                    <span
                        class="dark:text-primary-dark-0 text-xs text-gray-500"
                    >
                        12:34 PM
                    </span>
                </div>
                <p
                    class="dark:text-primary-dark-0 truncate text-sm text-gray-600"
                >
                    Welcome to Telegram! This is your first message.
                </p>
            </div>
        </div>
    </main>
</template>
<script lang="js">
export default {
    name: 'Mainer',
    data() {
        return {};
    },
};
</script>
<style scoped></style>
