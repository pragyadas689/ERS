package com.pwc.expenserestapi.controller;

import com.pwc.expenserestapi.entity.Expense;
import com.pwc.expenserestapi.service.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
@CrossOrigin(origins = "*")
@RequestMapping("/api/expenses")
@RestController
public class ExpenseController {
    @Autowired
    private ExpenseService expenseService;

    @PostMapping
    public ResponseEntity<Expense> createBook(@Valid @RequestBody Expense expense){
        var data = expenseService.createExpense(expense);
        return new ResponseEntity<>(data, HttpStatus.CREATED);
    }
    @GetMapping
    public ResponseEntity<List<Expense>> getAllBooks(){
        var data = expenseService.getAllExpense();
        return new ResponseEntity<>(data, HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Expense> getBookById(@PathVariable("id") Long id){
        var data = expenseService.getExpenseById(id);
        return new ResponseEntity<>(data, HttpStatus.OK);
    }
    @PutMapping("/{id}")
    public ResponseEntity<Expense> updateBook(@PathVariable("id") Long id,
                                           @Valid @RequestBody Expense expense){
        var data = expenseService.updateExpense(id, expense);
        return new ResponseEntity<>(data, HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteBook(@PathVariable("id") Long id){
        expenseService.deleteExpense(id);
        return new ResponseEntity<>("delete book successfully", HttpStatus.OK);
    }
}
