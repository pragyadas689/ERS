package com.pwc.expenserestapi.service.impl;

import com.pwc.expenserestapi.entity.Expense;
import com.pwc.expenserestapi.exception.ResourceNotFoundException;
import com.pwc.expenserestapi.repository.ExpenseRepository;
import com.pwc.expenserestapi.service.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ExpenseServiceImpl implements ExpenseService {
    @Autowired
    private ExpenseRepository expenseRepository;
    @Override
    public List<Expense> getAllExpense() {
        return expenseRepository.findAll();
    }

    @Override
    public Expense getExpenseById(Long Id) {
        return expenseRepository.findById(Id)
                .orElseThrow(() -> new ResourceNotFoundException("expense" , "id" , Id.toString()));
    }

    @Override
    public Expense updateExpense(Long id, Expense updateExpense) {
        Expense expense = expenseRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("expense" , "id" , id.toString()));
        expense.setName(updateExpense.getName());
        expense.setDate(updateExpense.getDate());
        expense.setAmount(updateExpense.getAmount());
        expense.setDescription(updateExpense.getDescription());
        expense.setStatus(updateExpense.getStatus());
        return expenseRepository.save(expense);
    }

    @Override
    public Expense createExpense(Expense newExpense) {
        return expenseRepository.save(newExpense);
    }

    @Override
    public void deleteExpense(Long id) {
       Expense expense = expenseRepository.findById(id)
               .orElseThrow(() -> new ResourceNotFoundException("expense" , "id" , id.toString()));
       expenseRepository.deleteById(id);
    }
}
