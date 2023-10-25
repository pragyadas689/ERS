package com.pwc.expenserestapi.service;

import com.pwc.expenserestapi.entity.Expense;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface ExpenseService {
    List<Expense> getAllExpense();
    Expense getExpenseById(Long Id);
    Expense updateExpense(Long id, Expense updateExpense);
    Expense createExpense(Expense newExpense);
    void deleteExpense(Long id);
}
