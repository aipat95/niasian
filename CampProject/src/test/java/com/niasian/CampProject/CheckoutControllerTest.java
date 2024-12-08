package com.niasian.CampProject;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.niasian.CampProject.controller.reception.CheckoutController;
import com.niasian.CampProject.entity.reception.Checkout;
import com.niasian.CampProject.service.reception.CheckoutService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(CheckoutController.class)
public class CheckoutControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private CheckoutService checkoutService;

    @Autowired
    private ObjectMapper objectMapper;

    // Test for POST /reception/checkout
    @Test
    public void testCheckoutCustomer() throws Exception {
        // Given
        Checkout checkout = new Checkout();
        checkout.setName("Test Customer");
        checkout.setPassportNumber("123456");

        Checkout savedCheckout = new Checkout();
        savedCheckout.setName("Test Customer");
        savedCheckout.setPassportNumber("123456");

        when(checkoutService.checkoutCustomer(checkout)).thenReturn(savedCheckout);

        String jsonCheckout = objectMapper.writeValueAsString(checkout);
        mockMvc.perform(MockMvcRequestBuilders.post("/reception/checkout")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonCheckout))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.content().string("Checkout successful for Test Customer"));

        verify(checkoutService, times(1)).checkoutCustomer(checkout);
    }

    // Test for GET /reception/checkout/{passportNumber}
    @Test
    public void testGetCheckoutByPassportNumber() throws Exception {
        // Given
        String passportNumber = "123456";
        Checkout checkout = new Checkout();
        checkout.setName("Test Customer");
        checkout.setPassportNumber(passportNumber);
        when(checkoutService.getCheckoutByPassportNumber(passportNumber)).thenReturn(checkout);

        String jsonCheckout = objectMapper.writeValueAsString(checkout);
        mockMvc.perform(MockMvcRequestBuilders.get("/reception/checkout/{passportNumber}", passportNumber))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(jsonCheckout));

        verify(checkoutService, times(1)).getCheckoutByPassportNumber(passportNumber);
    }
}
