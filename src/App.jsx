import React from "react";
import { Button, Form, Input, Select, Space } from "antd";

const App = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div className="h-screen w-full flex ">
      <div className="h-full w-[60%] flex justify-center ">
        <div className="mt-14 h-3/4 w-[70%] flex flex-col border-2">
          <div className="mt-10 flex flex-col justify-center items-center">
            <h5 className="font-bold text-xl">Contact Us</h5>
            <h6 className="mt-3 font-bold text-5xl">Make an Appointment</h6>
          </div>
          <div className="mt-10">
            <Form name="control-hooks" onFinish={onFinish}>
              <div className="flex flex-row m-auto justify-center ">
                <Form.Item
                  name="note"
                  placeholder="input placeholder"
                  className="w-[40%]"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input className="h-14 w-full border-2 border-solid border-gray-200 bg-slate-200" />
                </Form.Item>
                <Form.Item
                  name="note"
                  className="ml-10 w-[40%]"
                  placeholder="Email"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input className="h-14 w-full border-2 border-solid border-gray-200 bg-slate-200" />
                </Form.Item>
              </div>

              <div className="flex flex-row m-auto justify-center">
                <Form.Item
                  name="gender"
                  className="w-[40%]"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Select
                    placeholder="Place Select"
                    className="h-14 w-full border-2 border-solid border-gray-200 bg-slate-200"
                    allowClear
                  >
                    <Option value="male">Dekhi</Option>
                    <Option value="female">N0ida</Option>
                    <Option value="other">Hydrabad</Option>
                  </Select>
                </Form.Item>
                <Form.Item noStyle>
                  <Form.Item
                    name="timing"
                    className="ml-10 w-[40%]"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Select
                      placeholder="4.00 AM Available"
                      className="h-14 w-full border-2 border-solid border-gray-200 bg-slate-200"
                      allowClear
                    >
                      <Option value="male">male</Option>
                      <Option value="female">female</Option>
                      <Option value="other">other</Option>
                    </Select>
                  </Form.Item>
                </Form.Item>
              </div>

              <Form.Item name={["user", "introduction"]} className="m-14">
                <Input.TextArea
                  className="h-full font-semibold text-2xl border-2 border-solid border-gray-200 bg-slate-200"
                  placeholder="Message"
                />
              </Form.Item>

              <Form.Item className="flex justify-center">
                <Space>
                  <Button type="primary" htmlType="submit">
                    Book Oppointment
                  </Button>
                </Space>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>

      <div className="m-10 h-[80%] w-[30%] border-2 border-black">
        <div className="mt-14 h-3/4 w-[70%] flex flex-col border-2">
          <div className="mt-10 flex flex-col justify-center items-center">
            <h5 className="font-bold text-xl">Contact Us</h5>
            <h6 className="mt-3font-bold text-5xl">Make an Appiintment</h6>
          </div>
          <div className="mt-10">
            <Form name="control-hooks" onFinish={onFinish}>
              <div className="flex justify-center flex-col">
                <div className="flex flex-col m-auto justify-center ">
                  <Form.Item
                    name="note"
                    placeholder="input placeholder"
                    className="w-[full]"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="note"
                    className="ml-10 w-[full]"
                    placeholder="Email"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </div>

                <div className="flex flex-col m-auto justify-center">
                  <Form.Item
                    name="gender"
                    className="w-[full]"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Select placeholder="Place Select" allowClear>
                      <Option value="male">Dekhi</Option>
                      <Option value="female">N0ida</Option>
                      <Option value="other">Hydrabad</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item noStyle>
                    <Form.Item
                      name="timing"
                      className="ml-10 w-[full]"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Select placeholder="4.00 AM Available" allowClear>
                        <Option value="male">male</Option>
                        <Option value="female">female</Option>
                        <Option value="other">other</Option>
                      </Select>
                    </Form.Item>
                  </Form.Item>
                </div>

                <Form.Item name={["user", "introduction"]} className="m-5">
                  <Input.TextArea placeholder="Message" />
                </Form.Item>

                <Form.Item className="flex justify-center">
                  <Space>
                    <Button type="primary" htmlType="submit">
                      Book Oppointment
                    </Button>
                  </Space>
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
