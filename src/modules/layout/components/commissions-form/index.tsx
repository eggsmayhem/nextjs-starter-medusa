import React, { useState, MouseEvent } from 'react'
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com'
import { send } from 'emailjs-com'

const CommissionsForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
      } = useForm({
        defaultValues: { yes_i_understand: false }
      });
      const sendEmail = (formData: Record<string, unknown> | undefined) => {
        emailjs
          .send("service_6bttucj", "template_3mlvewo", formData, "gGOQLXH-ViY3jmho0")
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
        reset();
      };

    return (
      <div className='flex flex-col items-center'>
      <h1 className="text-center text-md-left mb-3 justify-self-center text-3xl">Get in Touch / Request a Commission</h1>
      <form className="contact-form self-center justify-self-center w-96" onSubmit={handleSubmit(sendEmail)}>
        <div className="form-group mb-0 py-3 self-center justify-self-center">
          <textarea
            // className="form-control custom--fields-mod text-the-primary self-center justify-self-center"
            className="form-control custom--fields-mod text-the-primary block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="message"
            rows={3}
            placeholder="What is your vision?"
            name="message"
            {...register("message", { required: true })}
          ></textarea>
          {errors.message && (
            <div style={{ color: "red" }} className="invalid-feedback d-block">
              Please fill out this field.
            </div>
          )}
        </div>
        <div className="form-group row py-2 mb-0">
          <div className="col-md-6">
            <div>
              {errors.yes_i_understand && (
                <div
                  className="invalid-feedback d-block"
                  style={{ color: "red" }}
                >
                  You must agree before submitting.
                </div>
              )}
            </div>
          </div>
          <div className="col-md-6 text-center text-md-left py-2 py-md-0">
            <input
              className="buttons-width float-md-right btn btn-dark-moderate-orange rounded-md bg-red-700 p-2 text-white"
              type="submit"
              value="SEND MESSAGE"
            />
          </div>
        </div>
      </form>
    </div>
    );
}

export default CommissionsForm