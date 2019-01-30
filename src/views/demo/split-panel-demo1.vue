<template>
    <div>
        <Alert>
            An info prompt
            <template slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </template>
        </Alert>
        <Alert type="success">
            A success prompt
            <template slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </template>
        </Alert>
        <Alert type="warning">
            A warning prompt
            <template slot="desc">
                Content of prompt. Content of prompt. Content of prompt.
            </template>
        </Alert>
    </div>
</template>
<script>
  // import { Alert, Icon } from 'iview';
  // export default {
  //     components: { Alert, Icon }
  // }
</script>
