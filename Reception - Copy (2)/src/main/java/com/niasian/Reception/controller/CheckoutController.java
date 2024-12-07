package com.niasian.Reception.controller;

import com.niasian.Reception.entity.Checkout;
import com.niasian.Reception.service.CheckoutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/reception/checkout")
@CrossOrigin(origins = "http://localhost:3001")
public class CheckoutController {

    @Autowired
    private CheckoutService checkoutService;

    @PostMapping
    public ResponseEntity<String> checkoutCustomer(@RequestBody Checkout checkout) {
        Checkout savedCheckout = checkoutService.checkoutCustomer(checkout);
        return ResponseEntity.ok("Checkout successful for " + savedCheckout.getName());
    }

    @GetMapping("/{passportNumber}")
    public ResponseEntity<Checkout> getCheckoutByPassportNumber(@PathVariable String passportNumber) {
        Checkout checkout = checkoutService.getCheckoutByPassportNumber(passportNumber);
        return ResponseEntity.ok(checkout);
    }
}
