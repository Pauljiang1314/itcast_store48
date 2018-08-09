<template>
    <div class="login-wrap">
        <el-form-item label="活动区域">
            <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
