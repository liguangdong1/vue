<template>
  <a-form :layout="formLayout" :form="form" v-bind="formItemLayout">
    <a-form-item label="Form Layout">
      <a-radio-group v-model="formLayout">
        <a-radio-button value="horizontal"> Horizontal </a-radio-button>
        <a-radio-button value="vertical"> Vertical </a-radio-button>
        <a-radio-button value="inline"> Inline </a-radio-button>
      </a-radio-group>
    </a-form-item>
    <a-form-item
      label="Field A"
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
    >
      <a-input
        v-decorator="[
          'fieldA',
          {
            initialValue: fieldA,
            rules: [{ required: true, min: 6, message: '必须大于5个字符' }]
          }
        ]"
        placeholder="input placeholder"
      />
    </a-form-item>
    <a-form-item
      label="Field B"
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
    >
      <a-input v-decorator="['fieldB']" placeholder="input placeholder" />
    </a-form-item>
    <a-form-item :wrapper-col="buttonItemLayout.wrapperCol">
      <a-button type="primary" @click="handleClick"> Submit </a-button>
    </a-form-item>
  </a-form>
</template>
<script>
export default {
  data() {
    this.form = this.$form.createForm(this);
    return {
      formLayout: "horizontal",
      fieldA: "hello"
    };
  },
  computed: {
    formItemLayout() {
      const { layout } = this.form;
      return layout === "horizontal"
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 }
          }
        : {};
    },
    buttonItemLayout() {
      const { layout } = this.form;
      return layout === "horizontal"
        ? {
            wrapperCol: { span: 14, offset: 4 }
          }
        : {};
    }
  },
  methods: {
    handleClick() {
      this.form.validateFields((err, values) => {
        if (!err) {
          Object.assign(this, values);
        }
      });
    }
  }
};
</script>
